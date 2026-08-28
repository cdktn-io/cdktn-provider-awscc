# `dataAwsccAccountaccessEntitlement` Submodule <a name="`dataAwsccAccountaccessEntitlement` Submodule" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAccountaccessEntitlement <a name="DataAwsccAccountaccessEntitlement" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/accountaccess_entitlement awscc_accountaccess_entitlement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccountaccessentitlement"

dataawsccaccountaccessentitlement.NewDataAwsccAccountaccessEntitlement(scope Construct, id *string, config DataAwsccAccountaccessEntitlementConfig) DataAwsccAccountaccessEntitlement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementConfig">DataAwsccAccountaccessEntitlementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementConfig">DataAwsccAccountaccessEntitlementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAccountaccessEntitlement resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccountaccessentitlement"

dataawsccaccountaccessentitlement.DataAwsccAccountaccessEntitlement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccountaccessentitlement"

dataawsccaccountaccessentitlement.DataAwsccAccountaccessEntitlement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccountaccessentitlement"

dataawsccaccountaccessentitlement.DataAwsccAccountaccessEntitlement_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccountaccessentitlement"

dataawsccaccountaccessentitlement.DataAwsccAccountaccessEntitlement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccAccountaccessEntitlement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccAccountaccessEntitlement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccAccountaccessEntitlement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/accountaccess_entitlement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAccountaccessEntitlement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.applicationArn">ApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.entitlement">Entitlement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference">DataAwsccAccountaccessEntitlementEntitlementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.entitlementId">EntitlementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.applicationArn"></a>

```go
func ApplicationArn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Entitlement`<sup>Required</sup> <a name="Entitlement" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.entitlement"></a>

```go
func Entitlement() DataAwsccAccountaccessEntitlementEntitlementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference">DataAwsccAccountaccessEntitlementEntitlementOutputReference</a>

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.entitlementId"></a>

```go
func EntitlementId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAccountaccessEntitlementConfig <a name="DataAwsccAccountaccessEntitlementConfig" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccountaccessentitlement"

&dataawsccaccountaccessentitlement.DataAwsccAccountaccessEntitlementConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/accountaccess_entitlement#id DataAwsccAccountaccessEntitlement#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAccountaccessEntitlementEntitlement <a name="DataAwsccAccountaccessEntitlementEntitlement" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccountaccessentitlement"

&dataawsccaccountaccessentitlement.DataAwsccAccountaccessEntitlementEntitlement {

}
```


### DataAwsccAccountaccessEntitlementEntitlementPrincipalRole <a name="DataAwsccAccountaccessEntitlementEntitlementPrincipalRole" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRole.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccountaccessentitlement"

&dataawsccaccountaccessentitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRole {

}
```


### DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipal <a name="DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipal" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccountaccessentitlement"

&dataawsccaccountaccessentitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipal {

}
```


### DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter <a name="DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccountaccessentitlement"

&dataawsccaccountaccessentitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAccountaccessEntitlementEntitlementOutputReference <a name="DataAwsccAccountaccessEntitlementEntitlementOutputReference" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccountaccessentitlement"

dataawsccaccountaccessentitlement.NewDataAwsccAccountaccessEntitlementEntitlementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAccountaccessEntitlementEntitlementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.property.principalRole">PrincipalRole</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference">DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlement">DataAwsccAccountaccessEntitlementEntitlement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalRole`<sup>Required</sup> <a name="PrincipalRole" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.property.principalRole"></a>

```go
func PrincipalRole() DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference">DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAccountaccessEntitlementEntitlement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlement">DataAwsccAccountaccessEntitlementEntitlement</a>

---


### DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference <a name="DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccountaccessentitlement"

dataawsccaccountaccessentitlement.NewDataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.account">Account</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference">DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRole">DataAwsccAccountaccessEntitlementEntitlementPrincipalRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.account"></a>

```go
func Account() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.principal"></a>

```go
func Principal() DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference">DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAccountaccessEntitlementEntitlementPrincipalRole
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRole">DataAwsccAccountaccessEntitlementEntitlementPrincipalRole</a>

---


### DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference <a name="DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccountaccessentitlement"

dataawsccaccountaccessentitlement.NewDataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a>

---


### DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference <a name="DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccaccountaccessentitlement"

dataawsccaccountaccessentitlement.NewDataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.identityCenter">IdentityCenter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference">DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipal">DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityCenter`<sup>Required</sup> <a name="IdentityCenter" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.identityCenter"></a>

```go
func IdentityCenter() DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference">DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipal
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccountaccessEntitlement.DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipal">DataAwsccAccountaccessEntitlementEntitlementPrincipalRolePrincipal</a>

---



