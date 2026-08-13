# `dataAwsccLakeformationPrincipalPermissions` Submodule <a name="`dataAwsccLakeformationPrincipalPermissions` Submodule" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLakeformationPrincipalPermissions <a name="DataAwsccLakeformationPrincipalPermissions" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lakeformation_principal_permissions awscc_lakeformation_principal_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

dataawscclakeformationprincipalpermissions.NewDataAwsccLakeformationPrincipalPermissions(scope Construct, id *string, config DataAwsccLakeformationPrincipalPermissionsConfig) DataAwsccLakeformationPrincipalPermissions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig">DataAwsccLakeformationPrincipalPermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig">DataAwsccLakeformationPrincipalPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLakeformationPrincipalPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

dataawscclakeformationprincipalpermissions.DataAwsccLakeformationPrincipalPermissions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

dataawscclakeformationprincipalpermissions.DataAwsccLakeformationPrincipalPermissions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

dataawscclakeformationprincipalpermissions.DataAwsccLakeformationPrincipalPermissions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

dataawscclakeformationprincipalpermissions.DataAwsccLakeformationPrincipalPermissions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccLakeformationPrincipalPermissions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccLakeformationPrincipalPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccLakeformationPrincipalPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lakeformation_principal_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLakeformationPrincipalPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.permissionsWithGrantOption">PermissionsWithGrantOption</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference">DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.principalIdentifier">PrincipalIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.resource">Resource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `PermissionsWithGrantOption`<sup>Required</sup> <a name="PermissionsWithGrantOption" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.permissionsWithGrantOption"></a>

```go
func PermissionsWithGrantOption() *[]*string
```

- *Type:* *[]*string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.principal"></a>

```go
func Principal() DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference">DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference</a>

---

##### `PrincipalIdentifier`<sup>Required</sup> <a name="PrincipalIdentifier" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.principalIdentifier"></a>

```go
func PrincipalIdentifier() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.resource"></a>

```go
func Resource() DataAwsccLakeformationPrincipalPermissionsResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceOutputReference</a>

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.resourceIdentifier"></a>

```go
func ResourceIdentifier() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLakeformationPrincipalPermissionsConfig <a name="DataAwsccLakeformationPrincipalPermissionsConfig" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

&dataawscclakeformationprincipalpermissions.DataAwsccLakeformationPrincipalPermissionsConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lakeformation_principal_permissions#id DataAwsccLakeformationPrincipalPermissions#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLakeformationPrincipalPermissionsPrincipal <a name="DataAwsccLakeformationPrincipalPermissionsPrincipal" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

&dataawscclakeformationprincipalpermissions.DataAwsccLakeformationPrincipalPermissionsPrincipal {

}
```


### DataAwsccLakeformationPrincipalPermissionsResource <a name="DataAwsccLakeformationPrincipalPermissionsResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

&dataawscclakeformationprincipalpermissions.DataAwsccLakeformationPrincipalPermissionsResource {

}
```


### DataAwsccLakeformationPrincipalPermissionsResourceDatabase <a name="DataAwsccLakeformationPrincipalPermissionsResourceDatabase" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

&dataawscclakeformationprincipalpermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabase {

}
```


### DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter <a name="DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

&dataawscclakeformationprincipalpermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter {

}
```


### DataAwsccLakeformationPrincipalPermissionsResourceDataLocation <a name="DataAwsccLakeformationPrincipalPermissionsResourceDataLocation" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

&dataawscclakeformationprincipalpermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocation {

}
```


### DataAwsccLakeformationPrincipalPermissionsResourceLfTag <a name="DataAwsccLakeformationPrincipalPermissionsResourceLfTag" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTag.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

&dataawscclakeformationprincipalpermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTag {

}
```


### DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy <a name="DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

&dataawscclakeformationprincipalpermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy {

}
```


### DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression <a name="DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

&dataawscclakeformationprincipalpermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression {

}
```


### DataAwsccLakeformationPrincipalPermissionsResourceTable <a name="DataAwsccLakeformationPrincipalPermissionsResourceTable" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

&dataawscclakeformationprincipalpermissions.DataAwsccLakeformationPrincipalPermissionsResourceTable {

}
```


### DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns <a name="DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

&dataawscclakeformationprincipalpermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns {

}
```


### DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard <a name="DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

&dataawscclakeformationprincipalpermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

dataawscclakeformationprincipalpermissions.NewDataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">DataLakePrincipalIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipal">DataAwsccLakeformationPrincipalPermissionsPrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataLakePrincipalIdentifier`<sup>Required</sup> <a name="DataLakePrincipalIdentifier" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```go
func DataLakePrincipalIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLakeformationPrincipalPermissionsPrincipal
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsPrincipal">DataAwsccLakeformationPrincipalPermissionsPrincipal</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

dataawscclakeformationprincipalpermissions.NewDataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabase">DataAwsccLakeformationPrincipalPermissionsResourceDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLakeformationPrincipalPermissionsResourceDatabase
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabase">DataAwsccLakeformationPrincipalPermissionsResourceDatabase</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

dataawscclakeformationprincipalpermissions.NewDataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogId">TableCatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter">DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TableCatalogId`<sup>Required</sup> <a name="TableCatalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogId"></a>

```go
func TableCatalogId() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter">DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilter</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

dataawscclakeformationprincipalpermissions.NewDataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocation">DataAwsccLakeformationPrincipalPermissionsResourceDataLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLakeformationPrincipalPermissionsResourceDataLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocation">DataAwsccLakeformationPrincipalPermissionsResourceDataLocation</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

dataawscclakeformationprincipalpermissions.NewDataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValues">TagValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTag">DataAwsccLakeformationPrincipalPermissionsResourceLfTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValues"></a>

```go
func TagValues() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLakeformationPrincipalPermissionsResourceLfTag
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTag">DataAwsccLakeformationPrincipalPermissionsResourceLfTag</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList <a name="DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

dataawscclakeformationprincipalpermissions.NewDataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.get"></a>

```go
func Get(index *f64) DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

dataawscclakeformationprincipalpermissions.NewDataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValues">TagValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValues"></a>

```go
func TagValues() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

dataawscclakeformationprincipalpermissions.NewDataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expression">Expression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expression"></a>

```go
func Expression() DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList</a>

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicy</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

dataawscclakeformationprincipalpermissions.NewDataAwsccLakeformationPrincipalPermissionsResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLakeformationPrincipalPermissionsResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.database">Database</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilter">DataCellsFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.dataLocation">DataLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.lfTag">LfTag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicy">LfTagPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.table">Table</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumns">TableWithColumns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResource">DataAwsccLakeformationPrincipalPermissionsResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.database"></a>

```go
func Database() DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceDatabaseOutputReference</a>

---

##### `DataCellsFilter`<sup>Required</sup> <a name="DataCellsFilter" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilter"></a>

```go
func DataCellsFilter() DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference</a>

---

##### `DataLocation`<sup>Required</sup> <a name="DataLocation" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.dataLocation"></a>

```go
func DataLocation() DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceDataLocationOutputReference</a>

---

##### `LfTag`<sup>Required</sup> <a name="LfTag" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.lfTag"></a>

```go
func LfTag() DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceLfTagOutputReference</a>

---

##### `LfTagPolicy`<sup>Required</sup> <a name="LfTagPolicy" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicy"></a>

```go
func LfTagPolicy() DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference</a>

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.table"></a>

```go
func Table() DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference</a>

---

##### `TableWithColumns`<sup>Required</sup> <a name="TableWithColumns" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumns"></a>

```go
func TableWithColumns() DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLakeformationPrincipalPermissionsResource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResource">DataAwsccLakeformationPrincipalPermissionsResource</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

dataawscclakeformationprincipalpermissions.NewDataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcard">TableWildcard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTable">DataAwsccLakeformationPrincipalPermissionsResourceTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TableWildcard`<sup>Required</sup> <a name="TableWildcard" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcard"></a>

```go
func TableWildcard() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLakeformationPrincipalPermissionsResourceTable
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTable">DataAwsccLakeformationPrincipalPermissionsResourceTable</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

dataawscclakeformationprincipalpermissions.NewDataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedColumnNames`<sup>Required</sup> <a name="ExcludedColumnNames" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames"></a>

```go
func ExcludedColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a>

---


### DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference <a name="DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclakeformationprincipalpermissions"

dataawscclakeformationprincipalpermissions.NewDataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcard">ColumnWildcard</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNames"></a>

```go
func ColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `ColumnWildcard`<sup>Required</sup> <a name="ColumnWildcard" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcard"></a>

```go
func ColumnWildcard() DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference</a>

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationPrincipalPermissions.DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns">DataAwsccLakeformationPrincipalPermissionsResourceTableWithColumns</a>

---



