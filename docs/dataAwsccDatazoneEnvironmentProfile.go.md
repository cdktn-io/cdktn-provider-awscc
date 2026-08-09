# `dataAwsccDatazoneEnvironmentProfile` Submodule <a name="`dataAwsccDatazoneEnvironmentProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatazoneEnvironmentProfile <a name="DataAwsccDatazoneEnvironmentProfile" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datazone_environment_profile awscc_datazone_environment_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentprofile"

dataawsccdatazoneenvironmentprofile.NewDataAwsccDatazoneEnvironmentProfile(scope Construct, id *string, config DataAwsccDatazoneEnvironmentProfileConfig) DataAwsccDatazoneEnvironmentProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileConfig">DataAwsccDatazoneEnvironmentProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileConfig">DataAwsccDatazoneEnvironmentProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatazoneEnvironmentProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentprofile"

dataawsccdatazoneenvironmentprofile.DataAwsccDatazoneEnvironmentProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentprofile"

dataawsccdatazoneenvironmentprofile.DataAwsccDatazoneEnvironmentProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentprofile"

dataawsccdatazoneenvironmentprofile.DataAwsccDatazoneEnvironmentProfile_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentprofile"

dataawsccdatazoneenvironmentprofile.DataAwsccDatazoneEnvironmentProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDatazoneEnvironmentProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDatazoneEnvironmentProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDatazoneEnvironmentProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datazone_environment_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatazoneEnvironmentProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.awsAccountRegion">AwsAccountRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.domainIdentifier">DomainIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.environmentBlueprintId">EnvironmentBlueprintId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.environmentBlueprintIdentifier">EnvironmentBlueprintIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.environmentProfileId">EnvironmentProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.projectIdentifier">ProjectIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.userParameters">UserParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList">DataAwsccDatazoneEnvironmentProfileUserParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `AwsAccountRegion`<sup>Required</sup> <a name="AwsAccountRegion" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.awsAccountRegion"></a>

```go
func AwsAccountRegion() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.domainIdentifier"></a>

```go
func DomainIdentifier() *string
```

- *Type:* *string

---

##### `EnvironmentBlueprintId`<sup>Required</sup> <a name="EnvironmentBlueprintId" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.environmentBlueprintId"></a>

```go
func EnvironmentBlueprintId() *string
```

- *Type:* *string

---

##### `EnvironmentBlueprintIdentifier`<sup>Required</sup> <a name="EnvironmentBlueprintIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.environmentBlueprintIdentifier"></a>

```go
func EnvironmentBlueprintIdentifier() *string
```

- *Type:* *string

---

##### `EnvironmentProfileId`<sup>Required</sup> <a name="EnvironmentProfileId" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.environmentProfileId"></a>

```go
func EnvironmentProfileId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ProjectIdentifier`<sup>Required</sup> <a name="ProjectIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.projectIdentifier"></a>

```go
func ProjectIdentifier() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `UserParameters`<sup>Required</sup> <a name="UserParameters" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.userParameters"></a>

```go
func UserParameters() DataAwsccDatazoneEnvironmentProfileUserParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList">DataAwsccDatazoneEnvironmentProfileUserParametersList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatazoneEnvironmentProfileConfig <a name="DataAwsccDatazoneEnvironmentProfileConfig" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentprofile"

&dataawsccdatazoneenvironmentprofile.DataAwsccDatazoneEnvironmentProfileConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datazone_environment_profile#id DataAwsccDatazoneEnvironmentProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatazoneEnvironmentProfileUserParameters <a name="DataAwsccDatazoneEnvironmentProfileUserParameters" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentprofile"

&dataawsccdatazoneenvironmentprofile.DataAwsccDatazoneEnvironmentProfileUserParameters {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatazoneEnvironmentProfileUserParametersList <a name="DataAwsccDatazoneEnvironmentProfileUserParametersList" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentprofile"

dataawsccdatazoneenvironmentprofile.NewDataAwsccDatazoneEnvironmentProfileUserParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatazoneEnvironmentProfileUserParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.get"></a>

```go
func Get(index *f64) DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference <a name="DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneenvironmentprofile"

dataawsccdatazoneenvironmentprofile.NewDataAwsccDatazoneEnvironmentProfileUserParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParameters">DataAwsccDatazoneEnvironmentProfileUserParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneEnvironmentProfileUserParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentProfile.DataAwsccDatazoneEnvironmentProfileUserParameters">DataAwsccDatazoneEnvironmentProfileUserParameters</a>

---



