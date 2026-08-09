# `dataAwsccSesVdmAttributes` Submodule <a name="`dataAwsccSesVdmAttributes` Submodule" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSesVdmAttributes <a name="DataAwsccSesVdmAttributes" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ses_vdm_attributes awscc_ses_vdm_attributes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesvdmattributes"

dataawsccsesvdmattributes.NewDataAwsccSesVdmAttributes(scope Construct, id *string, config DataAwsccSesVdmAttributesConfig) DataAwsccSesVdmAttributes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesConfig">DataAwsccSesVdmAttributesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesConfig">DataAwsccSesVdmAttributesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSesVdmAttributes resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesvdmattributes"

dataawsccsesvdmattributes.DataAwsccSesVdmAttributes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesvdmattributes"

dataawsccsesvdmattributes.DataAwsccSesVdmAttributes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesvdmattributes"

dataawsccsesvdmattributes.DataAwsccSesVdmAttributes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesvdmattributes"

dataawsccsesvdmattributes.DataAwsccSesVdmAttributes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSesVdmAttributes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSesVdmAttributes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSesVdmAttributes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ses_vdm_attributes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSesVdmAttributes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.dashboardAttributes">DashboardAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference">DataAwsccSesVdmAttributesDashboardAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.guardianAttributes">GuardianAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference">DataAwsccSesVdmAttributesGuardianAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.vdmAttributesResourceId">VdmAttributesResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DashboardAttributes`<sup>Required</sup> <a name="DashboardAttributes" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.dashboardAttributes"></a>

```go
func DashboardAttributes() DataAwsccSesVdmAttributesDashboardAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference">DataAwsccSesVdmAttributesDashboardAttributesOutputReference</a>

---

##### `GuardianAttributes`<sup>Required</sup> <a name="GuardianAttributes" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.guardianAttributes"></a>

```go
func GuardianAttributes() DataAwsccSesVdmAttributesGuardianAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference">DataAwsccSesVdmAttributesGuardianAttributesOutputReference</a>

---

##### `VdmAttributesResourceId`<sup>Required</sup> <a name="VdmAttributesResourceId" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.vdmAttributesResourceId"></a>

```go
func VdmAttributesResourceId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSesVdmAttributesConfig <a name="DataAwsccSesVdmAttributesConfig" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesvdmattributes"

&dataawsccsesvdmattributes.DataAwsccSesVdmAttributesConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ses_vdm_attributes#id DataAwsccSesVdmAttributes#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSesVdmAttributesDashboardAttributes <a name="DataAwsccSesVdmAttributesDashboardAttributes" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesvdmattributes"

&dataawsccsesvdmattributes.DataAwsccSesVdmAttributesDashboardAttributes {

}
```


### DataAwsccSesVdmAttributesGuardianAttributes <a name="DataAwsccSesVdmAttributesGuardianAttributes" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesvdmattributes"

&dataawsccsesvdmattributes.DataAwsccSesVdmAttributesGuardianAttributes {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSesVdmAttributesDashboardAttributesOutputReference <a name="DataAwsccSesVdmAttributesDashboardAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesvdmattributes"

dataawsccsesvdmattributes.NewDataAwsccSesVdmAttributesDashboardAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSesVdmAttributesDashboardAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.property.engagementMetrics">EngagementMetrics</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributes">DataAwsccSesVdmAttributesDashboardAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EngagementMetrics`<sup>Required</sup> <a name="EngagementMetrics" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.property.engagementMetrics"></a>

```go
func EngagementMetrics() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSesVdmAttributesDashboardAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesDashboardAttributes">DataAwsccSesVdmAttributesDashboardAttributes</a>

---


### DataAwsccSesVdmAttributesGuardianAttributesOutputReference <a name="DataAwsccSesVdmAttributesGuardianAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesvdmattributes"

dataawsccsesvdmattributes.NewDataAwsccSesVdmAttributesGuardianAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSesVdmAttributesGuardianAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDelivery">OptimizedSharedDelivery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributes">DataAwsccSesVdmAttributesGuardianAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OptimizedSharedDelivery`<sup>Required</sup> <a name="OptimizedSharedDelivery" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDelivery"></a>

```go
func OptimizedSharedDelivery() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSesVdmAttributesGuardianAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesVdmAttributes.DataAwsccSesVdmAttributesGuardianAttributes">DataAwsccSesVdmAttributesGuardianAttributes</a>

---



