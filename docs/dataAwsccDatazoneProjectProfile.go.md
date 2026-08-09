# `dataAwsccDatazoneProjectProfile` Submodule <a name="`dataAwsccDatazoneProjectProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatazoneProjectProfile <a name="DataAwsccDatazoneProjectProfile" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datazone_project_profile awscc_datazone_project_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

dataawsccdatazoneprojectprofile.NewDataAwsccDatazoneProjectProfile(scope Construct, id *string, config DataAwsccDatazoneProjectProfileConfig) DataAwsccDatazoneProjectProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig">DataAwsccDatazoneProjectProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig">DataAwsccDatazoneProjectProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatazoneProjectProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

dataawsccdatazoneprojectprofile.DataAwsccDatazoneProjectProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

dataawsccdatazoneprojectprofile.DataAwsccDatazoneProjectProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

dataawsccdatazoneprojectprofile.DataAwsccDatazoneProjectProfile_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

dataawsccdatazoneprojectprofile.DataAwsccDatazoneProjectProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDatazoneProjectProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDatazoneProjectProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDatazoneProjectProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datazone_project_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatazoneProjectProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.allowCustomProjectResourceTags">AllowCustomProjectResourceTags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.domainIdentifier">DomainIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.domainUnitId">DomainUnitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.domainUnitIdentifier">DomainUnitIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.environmentConfigurations">EnvironmentConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.projectProfileId">ProjectProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.projectResourceTags">ProjectResourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList">DataAwsccDatazoneProjectProfileProjectResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.projectResourceTagsDescription">ProjectResourceTagsDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.useDefaultConfigurations">UseDefaultConfigurations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AllowCustomProjectResourceTags`<sup>Required</sup> <a name="AllowCustomProjectResourceTags" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.allowCustomProjectResourceTags"></a>

```go
func AllowCustomProjectResourceTags() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.domainIdentifier"></a>

```go
func DomainIdentifier() *string
```

- *Type:* *string

---

##### `DomainUnitId`<sup>Required</sup> <a name="DomainUnitId" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.domainUnitId"></a>

```go
func DomainUnitId() *string
```

- *Type:* *string

---

##### `DomainUnitIdentifier`<sup>Required</sup> <a name="DomainUnitIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.domainUnitIdentifier"></a>

```go
func DomainUnitIdentifier() *string
```

- *Type:* *string

---

##### `EnvironmentConfigurations`<sup>Required</sup> <a name="EnvironmentConfigurations" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.environmentConfigurations"></a>

```go
func EnvironmentConfigurations() DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList</a>

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectProfileId`<sup>Required</sup> <a name="ProjectProfileId" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.projectProfileId"></a>

```go
func ProjectProfileId() *string
```

- *Type:* *string

---

##### `ProjectResourceTags`<sup>Required</sup> <a name="ProjectResourceTags" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.projectResourceTags"></a>

```go
func ProjectResourceTags() DataAwsccDatazoneProjectProfileProjectResourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList">DataAwsccDatazoneProjectProfileProjectResourceTagsList</a>

---

##### `ProjectResourceTagsDescription`<sup>Required</sup> <a name="ProjectResourceTagsDescription" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.projectResourceTagsDescription"></a>

```go
func ProjectResourceTagsDescription() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UseDefaultConfigurations`<sup>Required</sup> <a name="UseDefaultConfigurations" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.useDefaultConfigurations"></a>

```go
func UseDefaultConfigurations() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatazoneProjectProfileConfig <a name="DataAwsccDatazoneProjectProfileConfig" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

&dataawsccdatazoneprojectprofile.DataAwsccDatazoneProjectProfileConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datazone_project_profile#id DataAwsccDatazoneProjectProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatazoneProjectProfileEnvironmentConfigurations <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurations" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

&dataawsccdatazoneprojectprofile.DataAwsccDatazoneProjectProfileEnvironmentConfigurations {

}
```


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

&dataawsccdatazoneprojectprofile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount {

}
```


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

&dataawsccdatazoneprojectprofile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion {

}
```


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

&dataawsccdatazoneprojectprofile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters {

}
```


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

&dataawsccdatazoneprojectprofile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides {

}
```


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

&dataawsccdatazoneprojectprofile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters {

}
```


### DataAwsccDatazoneProjectProfileProjectResourceTags <a name="DataAwsccDatazoneProjectProfileProjectResourceTags" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

&dataawsccdatazoneprojectprofile.DataAwsccDatazoneProjectProfileProjectResourceTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

dataawsccdatazoneprojectprofile.NewDataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount</a>

---


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

dataawsccdatazoneprojectprofile.NewDataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion</a>

---


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

dataawsccdatazoneprojectprofile.NewDataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.parameterOverrides">ParameterOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.resolvedParameters">ResolvedParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.ssmPath">SsmPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterOverrides`<sup>Required</sup> <a name="ParameterOverrides" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.parameterOverrides"></a>

```go
func ParameterOverrides() DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList</a>

---

##### `ResolvedParameters`<sup>Required</sup> <a name="ResolvedParameters" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.resolvedParameters"></a>

```go
func ResolvedParameters() DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList</a>

---

##### `SsmPath`<sup>Required</sup> <a name="SsmPath" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.ssmPath"></a>

```go
func SsmPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters</a>

---


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

dataawsccdatazoneprojectprofile.NewDataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.get"></a>

```go
func Get(index *f64) DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

dataawsccdatazoneprojectprofile.NewDataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.isEditable">IsEditable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEditable`<sup>Required</sup> <a name="IsEditable" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.isEditable"></a>

```go
func IsEditable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a>

---


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

dataawsccdatazoneprojectprofile.NewDataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.get"></a>

```go
func Get(index *f64) DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

dataawsccdatazoneprojectprofile.NewDataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.isEditable">IsEditable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEditable`<sup>Required</sup> <a name="IsEditable" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.isEditable"></a>

```go
func IsEditable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a>

---


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

dataawsccdatazoneprojectprofile.NewDataAwsccDatazoneProjectProfileEnvironmentConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

dataawsccdatazoneprojectprofile.NewDataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsAccount">AwsAccount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsRegion">AwsRegion</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.configurationParameters">ConfigurationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentMode">DeploymentMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentOrder">DeploymentOrder</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentBlueprintId">EnvironmentBlueprintId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentConfigurationId">EnvironmentConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurations">DataAwsccDatazoneProjectProfileEnvironmentConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsAccount`<sup>Required</sup> <a name="AwsAccount" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsAccount"></a>

```go
func AwsAccount() DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference</a>

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsRegion"></a>

```go
func AwsRegion() DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference</a>

---

##### `ConfigurationParameters`<sup>Required</sup> <a name="ConfigurationParameters" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.configurationParameters"></a>

```go
func ConfigurationParameters() DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference</a>

---

##### `DeploymentMode`<sup>Required</sup> <a name="DeploymentMode" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentMode"></a>

```go
func DeploymentMode() *string
```

- *Type:* *string

---

##### `DeploymentOrder`<sup>Required</sup> <a name="DeploymentOrder" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentOrder"></a>

```go
func DeploymentOrder() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnvironmentBlueprintId`<sup>Required</sup> <a name="EnvironmentBlueprintId" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentBlueprintId"></a>

```go
func EnvironmentBlueprintId() *string
```

- *Type:* *string

---

##### `EnvironmentConfigurationId`<sup>Required</sup> <a name="EnvironmentConfigurationId" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentConfigurationId"></a>

```go
func EnvironmentConfigurationId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneProjectProfileEnvironmentConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurations">DataAwsccDatazoneProjectProfileEnvironmentConfigurations</a>

---


### DataAwsccDatazoneProjectProfileProjectResourceTagsList <a name="DataAwsccDatazoneProjectProfileProjectResourceTagsList" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

dataawsccdatazoneprojectprofile.NewDataAwsccDatazoneProjectProfileProjectResourceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatazoneProjectProfileProjectResourceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference <a name="DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatazoneprojectprofile"

dataawsccdatazoneprojectprofile.NewDataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.isValueEditable">IsValueEditable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTags">DataAwsccDatazoneProjectProfileProjectResourceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsValueEditable`<sup>Required</sup> <a name="IsValueEditable" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.isValueEditable"></a>

```go
func IsValueEditable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatazoneProjectProfileProjectResourceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTags">DataAwsccDatazoneProjectProfileProjectResourceTags</a>

---



