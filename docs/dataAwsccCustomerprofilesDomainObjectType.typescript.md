# `dataAwsccCustomerprofilesDomainObjectType` Submodule <a name="`dataAwsccCustomerprofilesDomainObjectType` Submodule" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCustomerprofilesDomainObjectType <a name="DataAwsccCustomerprofilesDomainObjectType" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/customerprofiles_domain_object_type awscc_customerprofiles_domain_object_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesDomainObjectType } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType(scope: Construct, id: string, config: DataAwsccCustomerprofilesDomainObjectTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeConfig">DataAwsccCustomerprofilesDomainObjectTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeConfig">DataAwsccCustomerprofilesDomainObjectTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCustomerprofilesDomainObjectType resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.isConstruct"></a>

```typescript
import { dataAwsccCustomerprofilesDomainObjectType } from '@cdktn/provider-awscc'

dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.isTerraformElement"></a>

```typescript
import { dataAwsccCustomerprofilesDomainObjectType } from '@cdktn/provider-awscc'

dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.isTerraformDataSource"></a>

```typescript
import { dataAwsccCustomerprofilesDomainObjectType } from '@cdktn/provider-awscc'

dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.generateConfigForImport"></a>

```typescript
import { dataAwsccCustomerprofilesDomainObjectType } from '@cdktn/provider-awscc'

dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCustomerprofilesDomainObjectType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCustomerprofilesDomainObjectType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCustomerprofilesDomainObjectType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/customerprofiles_domain_object_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCustomerprofilesDomainObjectType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap">DataAwsccCustomerprofilesDomainObjectTypeFieldsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.objectTypeName">objectTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList">DataAwsccCustomerprofilesDomainObjectTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.fields"></a>

```typescript
public readonly fields: DataAwsccCustomerprofilesDomainObjectTypeFieldsMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap">DataAwsccCustomerprofilesDomainObjectTypeFieldsMap</a>

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `objectTypeName`<sup>Required</sup> <a name="objectTypeName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.objectTypeName"></a>

```typescript
public readonly objectTypeName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.tags"></a>

```typescript
public readonly tags: DataAwsccCustomerprofilesDomainObjectTypeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList">DataAwsccCustomerprofilesDomainObjectTypeTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCustomerprofilesDomainObjectTypeConfig <a name="DataAwsccCustomerprofilesDomainObjectTypeConfig" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeConfig.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesDomainObjectType } from '@cdktn/provider-awscc'

const dataAwsccCustomerprofilesDomainObjectTypeConfig: dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/customerprofiles_domain_object_type#id DataAwsccCustomerprofilesDomainObjectType#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCustomerprofilesDomainObjectTypeFields <a name="DataAwsccCustomerprofilesDomainObjectTypeFields" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFields.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesDomainObjectType } from '@cdktn/provider-awscc'

const dataAwsccCustomerprofilesDomainObjectTypeFields: dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFields = { ... }
```


### DataAwsccCustomerprofilesDomainObjectTypeTags <a name="DataAwsccCustomerprofilesDomainObjectTypeTags" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTags.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesDomainObjectType } from '@cdktn/provider-awscc'

const dataAwsccCustomerprofilesDomainObjectTypeTags: dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCustomerprofilesDomainObjectTypeFieldsMap <a name="DataAwsccCustomerprofilesDomainObjectTypeFieldsMap" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesDomainObjectType } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.get"></a>

```typescript
public get(key: string): DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference <a name="DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesDomainObjectType } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.property.featureType">featureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFields">DataAwsccCustomerprofilesDomainObjectTypeFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `featureType`<sup>Required</sup> <a name="featureType" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.property.featureType"></a>

```typescript
public readonly featureType: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCustomerprofilesDomainObjectTypeFields;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeFields">DataAwsccCustomerprofilesDomainObjectTypeFields</a>

---


### DataAwsccCustomerprofilesDomainObjectTypeTagsList <a name="DataAwsccCustomerprofilesDomainObjectTypeTagsList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesDomainObjectType } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.get"></a>

```typescript
public get(index: number): DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference <a name="DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesDomainObjectType } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTags">DataAwsccCustomerprofilesDomainObjectTypeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCustomerprofilesDomainObjectTypeTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesDomainObjectType.DataAwsccCustomerprofilesDomainObjectTypeTags">DataAwsccCustomerprofilesDomainObjectTypeTags</a>

---



