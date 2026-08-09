# `dataAwsccRolesanywhereProfile` Submodule <a name="`dataAwsccRolesanywhereProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRolesanywhereProfile <a name="DataAwsccRolesanywhereProfile" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/rolesanywhere_profile awscc_rolesanywhere_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrolesanywhereprofile"

dataawsccrolesanywhereprofile.NewDataAwsccRolesanywhereProfile(scope Construct, id *string, config DataAwsccRolesanywhereProfileConfig) DataAwsccRolesanywhereProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig">DataAwsccRolesanywhereProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig">DataAwsccRolesanywhereProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRolesanywhereProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrolesanywhereprofile"

dataawsccrolesanywhereprofile.DataAwsccRolesanywhereProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrolesanywhereprofile"

dataawsccrolesanywhereprofile.DataAwsccRolesanywhereProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrolesanywhereprofile"

dataawsccrolesanywhereprofile.DataAwsccRolesanywhereProfile_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrolesanywhereprofile"

dataawsccrolesanywhereprofile.DataAwsccRolesanywhereProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRolesanywhereProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRolesanywhereProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRolesanywhereProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/rolesanywhere_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRolesanywhereProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.acceptRoleSessionName">AcceptRoleSessionName</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.attributeMappings">AttributeMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList">DataAwsccRolesanywhereProfileAttributeMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.durationSeconds">DurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.managedPolicyArns">ManagedPolicyArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.profileArn">ProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.profileId">ProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.requireInstanceProperties">RequireInstanceProperties</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.roleArns">RoleArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.sessionPolicy">SessionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList">DataAwsccRolesanywhereProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AcceptRoleSessionName`<sup>Required</sup> <a name="AcceptRoleSessionName" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.acceptRoleSessionName"></a>

```go
func AcceptRoleSessionName() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AttributeMappings`<sup>Required</sup> <a name="AttributeMappings" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.attributeMappings"></a>

```go
func AttributeMappings() DataAwsccRolesanywhereProfileAttributeMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList">DataAwsccRolesanywhereProfileAttributeMappingsList</a>

---

##### `DurationSeconds`<sup>Required</sup> <a name="DurationSeconds" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.durationSeconds"></a>

```go
func DurationSeconds() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ManagedPolicyArns`<sup>Required</sup> <a name="ManagedPolicyArns" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.managedPolicyArns"></a>

```go
func ManagedPolicyArns() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProfileArn`<sup>Required</sup> <a name="ProfileArn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.profileArn"></a>

```go
func ProfileArn() *string
```

- *Type:* *string

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.profileId"></a>

```go
func ProfileId() *string
```

- *Type:* *string

---

##### `RequireInstanceProperties`<sup>Required</sup> <a name="RequireInstanceProperties" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.requireInstanceProperties"></a>

```go
func RequireInstanceProperties() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RoleArns`<sup>Required</sup> <a name="RoleArns" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.roleArns"></a>

```go
func RoleArns() *[]*string
```

- *Type:* *[]*string

---

##### `SessionPolicy`<sup>Required</sup> <a name="SessionPolicy" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.sessionPolicy"></a>

```go
func SessionPolicy() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.tags"></a>

```go
func Tags() DataAwsccRolesanywhereProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList">DataAwsccRolesanywhereProfileTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRolesanywhereProfileAttributeMappings <a name="DataAwsccRolesanywhereProfileAttributeMappings" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrolesanywhereprofile"

&dataawsccrolesanywhereprofile.DataAwsccRolesanywhereProfileAttributeMappings {

}
```


### DataAwsccRolesanywhereProfileAttributeMappingsMappingRules <a name="DataAwsccRolesanywhereProfileAttributeMappingsMappingRules" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrolesanywhereprofile"

&dataawsccrolesanywhereprofile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRules {

}
```


### DataAwsccRolesanywhereProfileConfig <a name="DataAwsccRolesanywhereProfileConfig" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrolesanywhereprofile"

&dataawsccrolesanywhereprofile.DataAwsccRolesanywhereProfileConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/rolesanywhere_profile#id DataAwsccRolesanywhereProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRolesanywhereProfileTags <a name="DataAwsccRolesanywhereProfileTags" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrolesanywhereprofile"

&dataawsccrolesanywhereprofile.DataAwsccRolesanywhereProfileTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRolesanywhereProfileAttributeMappingsList <a name="DataAwsccRolesanywhereProfileAttributeMappingsList" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrolesanywhereprofile"

dataawsccrolesanywhereprofile.NewDataAwsccRolesanywhereProfileAttributeMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRolesanywhereProfileAttributeMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.get"></a>

```go
func Get(index *f64) DataAwsccRolesanywhereProfileAttributeMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList <a name="DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrolesanywhereprofile"

dataawsccrolesanywhereprofile.NewDataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.get"></a>

```go
func Get(index *f64) DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference <a name="DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrolesanywhereprofile"

dataawsccrolesanywhereprofile.NewDataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.specifier">Specifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRules">DataAwsccRolesanywhereProfileAttributeMappingsMappingRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Specifier`<sup>Required</sup> <a name="Specifier" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.specifier"></a>

```go
func Specifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRolesanywhereProfileAttributeMappingsMappingRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRules">DataAwsccRolesanywhereProfileAttributeMappingsMappingRules</a>

---


### DataAwsccRolesanywhereProfileAttributeMappingsOutputReference <a name="DataAwsccRolesanywhereProfileAttributeMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrolesanywhereprofile"

dataawsccrolesanywhereprofile.NewDataAwsccRolesanywhereProfileAttributeMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRolesanywhereProfileAttributeMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.certificateField">CertificateField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.mappingRules">MappingRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList">DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappings">DataAwsccRolesanywhereProfileAttributeMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateField`<sup>Required</sup> <a name="CertificateField" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.certificateField"></a>

```go
func CertificateField() *string
```

- *Type:* *string

---

##### `MappingRules`<sup>Required</sup> <a name="MappingRules" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.mappingRules"></a>

```go
func MappingRules() DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList">DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRolesanywhereProfileAttributeMappings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappings">DataAwsccRolesanywhereProfileAttributeMappings</a>

---


### DataAwsccRolesanywhereProfileTagsList <a name="DataAwsccRolesanywhereProfileTagsList" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrolesanywhereprofile"

dataawsccrolesanywhereprofile.NewDataAwsccRolesanywhereProfileTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRolesanywhereProfileTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.get"></a>

```go
func Get(index *f64) DataAwsccRolesanywhereProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRolesanywhereProfileTagsOutputReference <a name="DataAwsccRolesanywhereProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrolesanywhereprofile"

dataawsccrolesanywhereprofile.NewDataAwsccRolesanywhereProfileTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRolesanywhereProfileTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTags">DataAwsccRolesanywhereProfileTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRolesanywhereProfileTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTags">DataAwsccRolesanywhereProfileTags</a>

---



