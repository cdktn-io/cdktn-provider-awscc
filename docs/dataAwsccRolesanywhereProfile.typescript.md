# `dataAwsccRolesanywhereProfile` Submodule <a name="`dataAwsccRolesanywhereProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRolesanywhereProfile <a name="DataAwsccRolesanywhereProfile" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/rolesanywhere_profile awscc_rolesanywhere_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereProfile } from '@cdktn/provider-awscc'

new dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile(scope: Construct, id: string, config: DataAwsccRolesanywhereProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig">DataAwsccRolesanywhereProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig">DataAwsccRolesanywhereProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRolesanywhereProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isConstruct"></a>

```typescript
import { dataAwsccRolesanywhereProfile } from '@cdktn/provider-awscc'

dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isTerraformElement"></a>

```typescript
import { dataAwsccRolesanywhereProfile } from '@cdktn/provider-awscc'

dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isTerraformDataSource"></a>

```typescript
import { dataAwsccRolesanywhereProfile } from '@cdktn/provider-awscc'

dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.generateConfigForImport"></a>

```typescript
import { dataAwsccRolesanywhereProfile } from '@cdktn/provider-awscc'

dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccRolesanywhereProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRolesanywhereProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRolesanywhereProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/rolesanywhere_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRolesanywhereProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.acceptRoleSessionName">acceptRoleSessionName</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.attributeMappings">attributeMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList">DataAwsccRolesanywhereProfileAttributeMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.managedPolicyArns">managedPolicyArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.profileArn">profileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.requireInstanceProperties">requireInstanceProperties</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.roleArns">roleArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.sessionPolicy">sessionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList">DataAwsccRolesanywhereProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `acceptRoleSessionName`<sup>Required</sup> <a name="acceptRoleSessionName" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.acceptRoleSessionName"></a>

```typescript
public readonly acceptRoleSessionName: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `attributeMappings`<sup>Required</sup> <a name="attributeMappings" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.attributeMappings"></a>

```typescript
public readonly attributeMappings: DataAwsccRolesanywhereProfileAttributeMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList">DataAwsccRolesanywhereProfileAttributeMappingsList</a>

---

##### `durationSeconds`<sup>Required</sup> <a name="durationSeconds" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `managedPolicyArns`<sup>Required</sup> <a name="managedPolicyArns" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.managedPolicyArns"></a>

```typescript
public readonly managedPolicyArns: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `profileArn`<sup>Required</sup> <a name="profileArn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.profileArn"></a>

```typescript
public readonly profileArn: string;
```

- *Type:* string

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `requireInstanceProperties`<sup>Required</sup> <a name="requireInstanceProperties" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.requireInstanceProperties"></a>

```typescript
public readonly requireInstanceProperties: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `roleArns`<sup>Required</sup> <a name="roleArns" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.roleArns"></a>

```typescript
public readonly roleArns: string[];
```

- *Type:* string[]

---

##### `sessionPolicy`<sup>Required</sup> <a name="sessionPolicy" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.sessionPolicy"></a>

```typescript
public readonly sessionPolicy: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.tags"></a>

```typescript
public readonly tags: DataAwsccRolesanywhereProfileTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList">DataAwsccRolesanywhereProfileTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRolesanywhereProfileAttributeMappings <a name="DataAwsccRolesanywhereProfileAttributeMappings" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappings.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereProfile } from '@cdktn/provider-awscc'

const dataAwsccRolesanywhereProfileAttributeMappings: dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappings = { ... }
```


### DataAwsccRolesanywhereProfileAttributeMappingsMappingRules <a name="DataAwsccRolesanywhereProfileAttributeMappingsMappingRules" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRules.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereProfile } from '@cdktn/provider-awscc'

const dataAwsccRolesanywhereProfileAttributeMappingsMappingRules: dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRules = { ... }
```


### DataAwsccRolesanywhereProfileConfig <a name="DataAwsccRolesanywhereProfileConfig" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereProfile } from '@cdktn/provider-awscc'

const dataAwsccRolesanywhereProfileConfig: dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/rolesanywhere_profile#id DataAwsccRolesanywhereProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRolesanywhereProfileTags <a name="DataAwsccRolesanywhereProfileTags" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTags.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereProfile } from '@cdktn/provider-awscc'

const dataAwsccRolesanywhereProfileTags: dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRolesanywhereProfileAttributeMappingsList <a name="DataAwsccRolesanywhereProfileAttributeMappingsList" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereProfile } from '@cdktn/provider-awscc'

new dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.get"></a>

```typescript
public get(index: number): DataAwsccRolesanywhereProfileAttributeMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList <a name="DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereProfile } from '@cdktn/provider-awscc'

new dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.get"></a>

```typescript
public get(index: number): DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference <a name="DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereProfile } from '@cdktn/provider-awscc'

new dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.specifier">specifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRules">DataAwsccRolesanywhereProfileAttributeMappingsMappingRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `specifier`<sup>Required</sup> <a name="specifier" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.specifier"></a>

```typescript
public readonly specifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRolesanywhereProfileAttributeMappingsMappingRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRules">DataAwsccRolesanywhereProfileAttributeMappingsMappingRules</a>

---


### DataAwsccRolesanywhereProfileAttributeMappingsOutputReference <a name="DataAwsccRolesanywhereProfileAttributeMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereProfile } from '@cdktn/provider-awscc'

new dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.certificateField">certificateField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.mappingRules">mappingRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList">DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappings">DataAwsccRolesanywhereProfileAttributeMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateField`<sup>Required</sup> <a name="certificateField" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.certificateField"></a>

```typescript
public readonly certificateField: string;
```

- *Type:* string

---

##### `mappingRules`<sup>Required</sup> <a name="mappingRules" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.mappingRules"></a>

```typescript
public readonly mappingRules: DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList">DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRolesanywhereProfileAttributeMappings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappings">DataAwsccRolesanywhereProfileAttributeMappings</a>

---


### DataAwsccRolesanywhereProfileTagsList <a name="DataAwsccRolesanywhereProfileTagsList" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereProfile } from '@cdktn/provider-awscc'

new dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.get"></a>

```typescript
public get(index: number): DataAwsccRolesanywhereProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRolesanywhereProfileTagsOutputReference <a name="DataAwsccRolesanywhereProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereProfile } from '@cdktn/provider-awscc'

new dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTags">DataAwsccRolesanywhereProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRolesanywhereProfileTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTags">DataAwsccRolesanywhereProfileTags</a>

---



