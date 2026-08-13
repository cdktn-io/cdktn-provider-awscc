# `dataAwsccIdentitystoreGroupMembership` Submodule <a name="`dataAwsccIdentitystoreGroupMembership` Submodule" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIdentitystoreGroupMembership <a name="DataAwsccIdentitystoreGroupMembership" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/identitystore_group_membership awscc_identitystore_group_membership}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreGroupMembership } from '@cdktn/provider-awscc'

new dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership(scope: Construct, id: string, config: DataAwsccIdentitystoreGroupMembershipConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipConfig">DataAwsccIdentitystoreGroupMembershipConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipConfig">DataAwsccIdentitystoreGroupMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIdentitystoreGroupMembership resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.isConstruct"></a>

```typescript
import { dataAwsccIdentitystoreGroupMembership } from '@cdktn/provider-awscc'

dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.isTerraformElement"></a>

```typescript
import { dataAwsccIdentitystoreGroupMembership } from '@cdktn/provider-awscc'

dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.isTerraformDataSource"></a>

```typescript
import { dataAwsccIdentitystoreGroupMembership } from '@cdktn/provider-awscc'

dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.generateConfigForImport"></a>

```typescript
import { dataAwsccIdentitystoreGroupMembership } from '@cdktn/provider-awscc'

dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIdentitystoreGroupMembership resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIdentitystoreGroupMembership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIdentitystoreGroupMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/identitystore_group_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIdentitystoreGroupMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.identityStoreId">identityStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.memberId">memberId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference">DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.membershipId">membershipId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.identityStoreId"></a>

```typescript
public readonly identityStoreId: string;
```

- *Type:* string

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.memberId"></a>

```typescript
public readonly memberId: DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference">DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference</a>

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembership.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIdentitystoreGroupMembershipConfig <a name="DataAwsccIdentitystoreGroupMembershipConfig" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipConfig.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreGroupMembership } from '@cdktn/provider-awscc'

const dataAwsccIdentitystoreGroupMembershipConfig: dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/identitystore_group_membership#id DataAwsccIdentitystoreGroupMembership#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIdentitystoreGroupMembershipMemberId <a name="DataAwsccIdentitystoreGroupMembershipMemberId" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberId.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreGroupMembership } from '@cdktn/provider-awscc'

const dataAwsccIdentitystoreGroupMembershipMemberId: dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberId = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference <a name="DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreGroupMembership } from '@cdktn/provider-awscc'

new dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberId">DataAwsccIdentitystoreGroupMembershipMemberId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIdentitystoreGroupMembershipMemberId;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreGroupMembership.DataAwsccIdentitystoreGroupMembershipMemberId">DataAwsccIdentitystoreGroupMembershipMemberId</a>

---



