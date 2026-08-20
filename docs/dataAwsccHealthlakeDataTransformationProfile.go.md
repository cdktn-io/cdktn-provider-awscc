# `dataAwsccHealthlakeDataTransformationProfile` Submodule <a name="`dataAwsccHealthlakeDataTransformationProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccHealthlakeDataTransformationProfile <a name="DataAwsccHealthlakeDataTransformationProfile" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/healthlake_data_transformation_profile awscc_healthlake_data_transformation_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakedatatransformationprofile"

dataawscchealthlakedatatransformationprofile.NewDataAwsccHealthlakeDataTransformationProfile(scope Construct, id *string, config DataAwsccHealthlakeDataTransformationProfileConfig) DataAwsccHealthlakeDataTransformationProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig">DataAwsccHealthlakeDataTransformationProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig">DataAwsccHealthlakeDataTransformationProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccHealthlakeDataTransformationProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakedatatransformationprofile"

dataawscchealthlakedatatransformationprofile.DataAwsccHealthlakeDataTransformationProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakedatatransformationprofile"

dataawscchealthlakedatatransformationprofile.DataAwsccHealthlakeDataTransformationProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakedatatransformationprofile"

dataawscchealthlakedatatransformationprofile.DataAwsccHealthlakeDataTransformationProfile_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakedatatransformationprofile"

dataawscchealthlakedatatransformationprofile.DataAwsccHealthlakeDataTransformationProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccHealthlakeDataTransformationProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccHealthlakeDataTransformationProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccHealthlakeDataTransformationProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/healthlake_data_transformation_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccHealthlakeDataTransformationProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileDescription">ProfileDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileId">ProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileName">ProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.sourceFormat">SourceFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList">DataAwsccHealthlakeDataTransformationProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.targetFormat">TargetFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `ProfileDescription`<sup>Required</sup> <a name="ProfileDescription" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileDescription"></a>

```go
func ProfileDescription() *string
```

- *Type:* *string

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileId"></a>

```go
func ProfileId() *string
```

- *Type:* *string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileName"></a>

```go
func ProfileName() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.source"></a>

```go
func Source() DataAwsccHealthlakeDataTransformationProfileSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceOutputReference</a>

---

##### `SourceFormat`<sup>Required</sup> <a name="SourceFormat" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.sourceFormat"></a>

```go
func SourceFormat() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.tags"></a>

```go
func Tags() DataAwsccHealthlakeDataTransformationProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList">DataAwsccHealthlakeDataTransformationProfileTagsList</a>

---

##### `TargetFormat`<sup>Required</sup> <a name="TargetFormat" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.targetFormat"></a>

```go
func TargetFormat() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccHealthlakeDataTransformationProfileConfig <a name="DataAwsccHealthlakeDataTransformationProfileConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakedatatransformationprofile"

&dataawscchealthlakedatatransformationprofile.DataAwsccHealthlakeDataTransformationProfileConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/healthlake_data_transformation_profile#id DataAwsccHealthlakeDataTransformationProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccHealthlakeDataTransformationProfileSource <a name="DataAwsccHealthlakeDataTransformationProfileSource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakedatatransformationprofile"

&dataawscchealthlakedatatransformationprofile.DataAwsccHealthlakeDataTransformationProfileSource {

}
```


### DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId <a name="DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakedatatransformationprofile"

&dataawscchealthlakedatatransformationprofile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId {

}
```


### DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping <a name="DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakedatatransformationprofile"

&dataawscchealthlakedatatransformationprofile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping {

}
```


### DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile <a name="DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakedatatransformationprofile"

&dataawscchealthlakedatatransformationprofile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile {

}
```


### DataAwsccHealthlakeDataTransformationProfileTags <a name="DataAwsccHealthlakeDataTransformationProfileTags" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakedatatransformationprofile"

&dataawscchealthlakedatatransformationprofile.DataAwsccHealthlakeDataTransformationProfileTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference <a name="DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakedatatransformationprofile"

dataawscchealthlakedatatransformationprofile.NewDataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileId">ProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId">DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileId"></a>

```go
func ProfileId() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId">DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a>

---


### DataAwsccHealthlakeDataTransformationProfileSourceOutputReference <a name="DataAwsccHealthlakeDataTransformationProfileSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakedatatransformationprofile"

dataawscchealthlakedatatransformationprofile.NewDataAwsccHealthlakeDataTransformationProfileSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccHealthlakeDataTransformationProfileSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileId">ExistingVersionedProfileId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.profileMapping">ProfileMapping</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.starterProfile">StarterProfile</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSource">DataAwsccHealthlakeDataTransformationProfileSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExistingVersionedProfileId`<sup>Required</sup> <a name="ExistingVersionedProfileId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileId"></a>

```go
func ExistingVersionedProfileId() DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference</a>

---

##### `ProfileMapping`<sup>Required</sup> <a name="ProfileMapping" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.profileMapping"></a>

```go
func ProfileMapping() DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference</a>

---

##### `StarterProfile`<sup>Required</sup> <a name="StarterProfile" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.starterProfile"></a>

```go
func StarterProfile() DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccHealthlakeDataTransformationProfileSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSource">DataAwsccHealthlakeDataTransformationProfileSource</a>

---


### DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference <a name="DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakedatatransformationprofile"

dataawscchealthlakedatatransformationprofile.NewDataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMapping">ProfileMapping</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping">DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProfileMapping`<sup>Required</sup> <a name="ProfileMapping" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMapping"></a>

```go
func ProfileMapping() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping">DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping</a>

---


### DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference <a name="DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakedatatransformationprofile"

dataawscchealthlakedatatransformationprofile.NewDataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileName">StarterProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile">DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StarterProfileName`<sup>Required</sup> <a name="StarterProfileName" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileName"></a>

```go
func StarterProfileName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile">DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile</a>

---


### DataAwsccHealthlakeDataTransformationProfileTagsList <a name="DataAwsccHealthlakeDataTransformationProfileTagsList" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakedatatransformationprofile"

dataawscchealthlakedatatransformationprofile.NewDataAwsccHealthlakeDataTransformationProfileTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccHealthlakeDataTransformationProfileTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.get"></a>

```go
func Get(index *f64) DataAwsccHealthlakeDataTransformationProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccHealthlakeDataTransformationProfileTagsOutputReference <a name="DataAwsccHealthlakeDataTransformationProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscchealthlakedatatransformationprofile"

dataawscchealthlakedatatransformationprofile.NewDataAwsccHealthlakeDataTransformationProfileTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccHealthlakeDataTransformationProfileTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTags">DataAwsccHealthlakeDataTransformationProfileTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccHealthlakeDataTransformationProfileTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTags">DataAwsccHealthlakeDataTransformationProfileTags</a>

---



