# `dataAwsccDatazonePolicyGrant` Submodule <a name="`dataAwsccDatazonePolicyGrant` Submodule" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatazonePolicyGrant <a name="DataAwsccDatazonePolicyGrant" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/datazone_policy_grant awscc_datazone_policy_grant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

new dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant(scope: Construct, id: string, config: DataAwsccDatazonePolicyGrantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig">DataAwsccDatazonePolicyGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig">DataAwsccDatazonePolicyGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatazonePolicyGrant resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.isConstruct"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.isTerraformElement"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.isTerraformDataSource"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.generateConfigForImport"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDatazonePolicyGrant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDatazonePolicyGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDatazonePolicyGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/datazone_policy_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatazonePolicyGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.detail">detail</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference">DataAwsccDatazonePolicyGrantDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.entityIdentifier">entityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.grantId">grantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference">DataAwsccDatazonePolicyGrantPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.detail"></a>

```typescript
public readonly detail: DataAwsccDatazonePolicyGrantDetailOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference">DataAwsccDatazonePolicyGrantDetailOutputReference</a>

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

---

##### `entityIdentifier`<sup>Required</sup> <a name="entityIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.entityIdentifier"></a>

```typescript
public readonly entityIdentifier: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `grantId`<sup>Required</sup> <a name="grantId" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.grantId"></a>

```typescript
public readonly grantId: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.principal"></a>

```typescript
public readonly principal: DataAwsccDatazonePolicyGrantPrincipalOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference">DataAwsccDatazonePolicyGrantPrincipalOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatazonePolicyGrantConfig <a name="DataAwsccDatazonePolicyGrantConfig" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

const dataAwsccDatazonePolicyGrantConfig: dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/datazone_policy_grant#id DataAwsccDatazonePolicyGrant#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatazonePolicyGrantDetail <a name="DataAwsccDatazonePolicyGrantDetail" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetail.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

const dataAwsccDatazonePolicyGrantDetail: dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetail = { ... }
```


### DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool <a name="DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

const dataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool: dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool = { ... }
```


### DataAwsccDatazonePolicyGrantDetailCreateAssetType <a name="DataAwsccDatazonePolicyGrantDetailCreateAssetType" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetType.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

const dataAwsccDatazonePolicyGrantDetailCreateAssetType: dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetType = { ... }
```


### DataAwsccDatazonePolicyGrantDetailCreateDomainUnit <a name="DataAwsccDatazonePolicyGrantDetailCreateDomainUnit" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnit.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

const dataAwsccDatazonePolicyGrantDetailCreateDomainUnit: dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnit = { ... }
```


### DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile <a name="DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

const dataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile: dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile = { ... }
```


### DataAwsccDatazonePolicyGrantDetailCreateFormType <a name="DataAwsccDatazonePolicyGrantDetailCreateFormType" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormType.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

const dataAwsccDatazonePolicyGrantDetailCreateFormType: dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormType = { ... }
```


### DataAwsccDatazonePolicyGrantDetailCreateGlossary <a name="DataAwsccDatazonePolicyGrantDetailCreateGlossary" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossary.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

const dataAwsccDatazonePolicyGrantDetailCreateGlossary: dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossary = { ... }
```


### DataAwsccDatazonePolicyGrantDetailCreateProject <a name="DataAwsccDatazonePolicyGrantDetailCreateProject" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProject.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

const dataAwsccDatazonePolicyGrantDetailCreateProject: dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProject = { ... }
```


### DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile <a name="DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

const dataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile: dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile = { ... }
```


### DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners <a name="DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

const dataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners: dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners = { ... }
```


### DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners <a name="DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

const dataAwsccDatazonePolicyGrantDetailOverrideProjectOwners: dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners = { ... }
```


### DataAwsccDatazonePolicyGrantPrincipal <a name="DataAwsccDatazonePolicyGrantPrincipal" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipal.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

const dataAwsccDatazonePolicyGrantPrincipal: dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipal = { ... }
```


### DataAwsccDatazonePolicyGrantPrincipalDomainUnit <a name="DataAwsccDatazonePolicyGrantPrincipalDomainUnit" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnit.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

const dataAwsccDatazonePolicyGrantPrincipalDomainUnit: dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnit = { ... }
```


### DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter <a name="DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

const dataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter: dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter = { ... }
```


### DataAwsccDatazonePolicyGrantPrincipalGroup <a name="DataAwsccDatazonePolicyGrantPrincipalGroup" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroup.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

const dataAwsccDatazonePolicyGrantPrincipalGroup: dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroup = { ... }
```


### DataAwsccDatazonePolicyGrantPrincipalProject <a name="DataAwsccDatazonePolicyGrantPrincipalProject" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProject.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

const dataAwsccDatazonePolicyGrantPrincipalProject: dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProject = { ... }
```


### DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter <a name="DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

const dataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter: dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter = { ... }
```


### DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter <a name="DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

const dataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter: dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter = { ... }
```


### DataAwsccDatazonePolicyGrantPrincipalUser <a name="DataAwsccDatazonePolicyGrantPrincipalUser" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUser.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

const dataAwsccDatazonePolicyGrantPrincipalUser: dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUser = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference <a name="DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

new dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool">DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool">DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool</a>

---


### DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference <a name="DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

new dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetType">DataAwsccDatazonePolicyGrantDetailCreateAssetType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazonePolicyGrantDetailCreateAssetType;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetType">DataAwsccDatazonePolicyGrantDetailCreateAssetType</a>

---


### DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference <a name="DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

new dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnit">DataAwsccDatazonePolicyGrantDetailCreateDomainUnit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazonePolicyGrantDetailCreateDomainUnit;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnit">DataAwsccDatazonePolicyGrantDetailCreateDomainUnit</a>

---


### DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference <a name="DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

new dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitId">domainUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile">DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainUnitId`<sup>Required</sup> <a name="domainUnitId" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitId"></a>

```typescript
public readonly domainUnitId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile">DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile</a>

---


### DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference <a name="DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

new dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormType">DataAwsccDatazonePolicyGrantDetailCreateFormType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazonePolicyGrantDetailCreateFormType;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormType">DataAwsccDatazonePolicyGrantDetailCreateFormType</a>

---


### DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference <a name="DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

new dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossary">DataAwsccDatazonePolicyGrantDetailCreateGlossary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazonePolicyGrantDetailCreateGlossary;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossary">DataAwsccDatazonePolicyGrantDetailCreateGlossary</a>

---


### DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference <a name="DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

new dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfiles">projectProfiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile">DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `projectProfiles`<sup>Required</sup> <a name="projectProfiles" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfiles"></a>

```typescript
public readonly projectProfiles: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile">DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>

---


### DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference <a name="DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

new dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProject">DataAwsccDatazonePolicyGrantDetailCreateProject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazonePolicyGrantDetailCreateProject;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProject">DataAwsccDatazonePolicyGrantDetailCreateProject</a>

---


### DataAwsccDatazonePolicyGrantDetailOutputReference <a name="DataAwsccDatazonePolicyGrantDetailOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

new dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPool">addToProjectMemberPool</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference">DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createAssetType">createAssetType</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference">DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createDomainUnit">createDomainUnit</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference">DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createEnvironment">createEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprint">createEnvironmentFromBlueprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfile">createEnvironmentProfile</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference">DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createFormType">createFormType</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference">DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createGlossary">createGlossary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference">DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createProject">createProject</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference">DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfile">createProjectFromProjectProfile</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference">DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfile">delegateCreateEnvironmentProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwners">overrideDomainUnitOwners</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference">DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.overrideProjectOwners">overrideProjectOwners</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference">DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetail">DataAwsccDatazonePolicyGrantDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addToProjectMemberPool`<sup>Required</sup> <a name="addToProjectMemberPool" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPool"></a>

```typescript
public readonly addToProjectMemberPool: DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference">DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference</a>

---

##### `createAssetType`<sup>Required</sup> <a name="createAssetType" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createAssetType"></a>

```typescript
public readonly createAssetType: DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference">DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference</a>

---

##### `createDomainUnit`<sup>Required</sup> <a name="createDomainUnit" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createDomainUnit"></a>

```typescript
public readonly createDomainUnit: DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference">DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference</a>

---

##### `createEnvironment`<sup>Required</sup> <a name="createEnvironment" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createEnvironment"></a>

```typescript
public readonly createEnvironment: string;
```

- *Type:* string

---

##### `createEnvironmentFromBlueprint`<sup>Required</sup> <a name="createEnvironmentFromBlueprint" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprint"></a>

```typescript
public readonly createEnvironmentFromBlueprint: string;
```

- *Type:* string

---

##### `createEnvironmentProfile`<sup>Required</sup> <a name="createEnvironmentProfile" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfile"></a>

```typescript
public readonly createEnvironmentProfile: DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference">DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference</a>

---

##### `createFormType`<sup>Required</sup> <a name="createFormType" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createFormType"></a>

```typescript
public readonly createFormType: DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference">DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference</a>

---

##### `createGlossary`<sup>Required</sup> <a name="createGlossary" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createGlossary"></a>

```typescript
public readonly createGlossary: DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference">DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference</a>

---

##### `createProject`<sup>Required</sup> <a name="createProject" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createProject"></a>

```typescript
public readonly createProject: DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference">DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference</a>

---

##### `createProjectFromProjectProfile`<sup>Required</sup> <a name="createProjectFromProjectProfile" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfile"></a>

```typescript
public readonly createProjectFromProjectProfile: DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference">DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference</a>

---

##### `delegateCreateEnvironmentProfile`<sup>Required</sup> <a name="delegateCreateEnvironmentProfile" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfile"></a>

```typescript
public readonly delegateCreateEnvironmentProfile: string;
```

- *Type:* string

---

##### `overrideDomainUnitOwners`<sup>Required</sup> <a name="overrideDomainUnitOwners" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwners"></a>

```typescript
public readonly overrideDomainUnitOwners: DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference">DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference</a>

---

##### `overrideProjectOwners`<sup>Required</sup> <a name="overrideProjectOwners" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.overrideProjectOwners"></a>

```typescript
public readonly overrideProjectOwners: DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference">DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazonePolicyGrantDetail;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetail">DataAwsccDatazonePolicyGrantDetail</a>

---


### DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference <a name="DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

new dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners">DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners">DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners</a>

---


### DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference <a name="DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

new dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners">DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners">DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners</a>

---


### DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference <a name="DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

new dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.allDomainUnitsGrantFilter">allDomainUnitsGrantFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter">DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allDomainUnitsGrantFilter`<sup>Required</sup> <a name="allDomainUnitsGrantFilter" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.allDomainUnitsGrantFilter"></a>

```typescript
public readonly allDomainUnitsGrantFilter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter">DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter</a>

---


### DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference <a name="DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

new dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignation">domainUnitDesignation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitGrantFilter">domainUnitGrantFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference">DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifier">domainUnitIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnit">DataAwsccDatazonePolicyGrantPrincipalDomainUnit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainUnitDesignation`<sup>Required</sup> <a name="domainUnitDesignation" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignation"></a>

```typescript
public readonly domainUnitDesignation: string;
```

- *Type:* string

---

##### `domainUnitGrantFilter`<sup>Required</sup> <a name="domainUnitGrantFilter" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitGrantFilter"></a>

```typescript
public readonly domainUnitGrantFilter: DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference">DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference</a>

---

##### `domainUnitIdentifier`<sup>Required</sup> <a name="domainUnitIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifier"></a>

```typescript
public readonly domainUnitIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazonePolicyGrantPrincipalDomainUnit;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnit">DataAwsccDatazonePolicyGrantPrincipalDomainUnit</a>

---


### DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference <a name="DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

new dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifier">groupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroup">DataAwsccDatazonePolicyGrantPrincipalGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupIdentifier`<sup>Required</sup> <a name="groupIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifier"></a>

```typescript
public readonly groupIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazonePolicyGrantPrincipalGroup;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroup">DataAwsccDatazonePolicyGrantPrincipalGroup</a>

---


### DataAwsccDatazonePolicyGrantPrincipalOutputReference <a name="DataAwsccDatazonePolicyGrantPrincipalOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

new dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.domainUnit">domainUnit</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference">DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.group">group</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference">DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.project">project</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference">DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.user">user</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference">DataAwsccDatazonePolicyGrantPrincipalUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipal">DataAwsccDatazonePolicyGrantPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainUnit`<sup>Required</sup> <a name="domainUnit" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.domainUnit"></a>

```typescript
public readonly domainUnit: DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference">DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference</a>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.group"></a>

```typescript
public readonly group: DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference">DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference</a>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.project"></a>

```typescript
public readonly project: DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference">DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.user"></a>

```typescript
public readonly user: DataAwsccDatazonePolicyGrantPrincipalUserOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference">DataAwsccDatazonePolicyGrantPrincipalUserOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazonePolicyGrantPrincipal;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipal">DataAwsccDatazonePolicyGrantPrincipal</a>

---


### DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference <a name="DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

new dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignation">projectDesignation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.projectGrantFilter">projectGrantFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference">DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifier">projectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProject">DataAwsccDatazonePolicyGrantPrincipalProject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `projectDesignation`<sup>Required</sup> <a name="projectDesignation" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignation"></a>

```typescript
public readonly projectDesignation: string;
```

- *Type:* string

---

##### `projectGrantFilter`<sup>Required</sup> <a name="projectGrantFilter" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.projectGrantFilter"></a>

```typescript
public readonly projectGrantFilter: DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference">DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference</a>

---

##### `projectIdentifier`<sup>Required</sup> <a name="projectIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifier"></a>

```typescript
public readonly projectIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazonePolicyGrantPrincipalProject;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProject">DataAwsccDatazonePolicyGrantPrincipalProject</a>

---


### DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference <a name="DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

new dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.domainUnit">domainUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter">DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainUnit`<sup>Required</sup> <a name="domainUnit" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.domainUnit"></a>

```typescript
public readonly domainUnit: string;
```

- *Type:* string

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter">DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter</a>

---


### DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference <a name="DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

new dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.domainUnitFilter">domainUnitFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference">DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter">DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainUnitFilter`<sup>Required</sup> <a name="domainUnitFilter" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.domainUnitFilter"></a>

```typescript
public readonly domainUnitFilter: DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference">DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter">DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter</a>

---


### DataAwsccDatazonePolicyGrantPrincipalUserOutputReference <a name="DataAwsccDatazonePolicyGrantPrincipalUserOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazonePolicyGrant } from '@cdktn/provider-awscc'

new dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilter">allUsersGrantFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifier">userIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUser">DataAwsccDatazonePolicyGrantPrincipalUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allUsersGrantFilter`<sup>Required</sup> <a name="allUsersGrantFilter" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilter"></a>

```typescript
public readonly allUsersGrantFilter: string;
```

- *Type:* string

---

##### `userIdentifier`<sup>Required</sup> <a name="userIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifier"></a>

```typescript
public readonly userIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazonePolicyGrantPrincipalUser;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUser">DataAwsccDatazonePolicyGrantPrincipalUser</a>

---



